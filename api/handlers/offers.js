import { knex } from "../util/knex.js";
import clerkClient from "@clerk/clerk-sdk-node";

export const getOffers = async (req, res) => {
  const offers = await knex("offers").where({ isRequest: false });
  return res.json(offers);
};

export const getRequests = async (req, res) => {
  const offers = await knex("offers").where({ isRequest: true });
  return res.json(offers);
};

export const createOffer = async (req, res) => {
  const userId = req.auth?.claims?.sub;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  try {
    const user = await clerkClient.users.getUser(userId);
    const primaryEmailAddress = user.emailAddresses.find(
      (emailAddress) => emailAddress.id === user.primaryEmailAddressId
    );
    const offer = {
      userId: userId,
      parentEmail: primaryEmailAddress.emailAddress,
      parentName: req.body.parentName,
      startStreet: req.body.startStreet,
      startZip: req.body.startZip,
      startCity: req.body.startCity,
      dateOfTransportation: req.body.dateOfTransportation,
      modeOfTransportation: req.body.modeOfTransportation,
      direction: req.body.direction,
      numberOfChildren: req.body.numberOfChildren,
      isRequest: false,
    };
    await knex("offers").insert(offer);
    return res.json(offer);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createRequest = async (req, res) => {
  const userId = req.auth?.claims?.sub;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  try {
    const user = await clerkClient.users.getUser(userId);
    const primaryEmailAddress = user.emailAddresses.find(
      (emailAddress) => emailAddress.id === user.primaryEmailAddressId
    );
    const request = {
      userId: userId,
      parentEmail: primaryEmailAddress.emailAddress,
      parentName: req.body.parentName,
      startStreet: req.body.startStreet,
      startZip: req.body.startZip,
      startCity: req.body.startCity,
      dateOfTransportation: req.body.dateOfTransportation,
      direction: req.body.direction,
      numberOfChildren: req.body.numberOfChildren,
      isRequest: true,
    };
    await knex("offers").insert(request);
    return res.json(request);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const acceptRequest = async (req, res) => {
  console.log("acceptRequest");
  const userId = req.auth?.claims?.sub;
  if (!userId) return res.status(401).json({ message: "Unauthorized" });
  try {
    const user = await clerkClient.users.getUser(userId);
    if (!user) return res.status(401).json({ message: "Unauthorized" });
    // const offer = await knex("offers").where({ id: req.params.id }).first();
    const primaryEmailAddress = user.emailAddresses.find(
      (emailAddress) => emailAddress.id === user.primaryEmailAddressId
    );
    const acceptedRequest = {
      acceptedByUserId: userId,
      acceptedByEmail: primaryEmailAddress.emailAddress,
      acceptedByName: req.body.name,
      acceptedMessage: req.body.message,
    };
    console.log("acceptedRequest", acceptedRequest);
    const result = await knex("offers")
      .where({ id: req.params.id })
      .update(acceptedRequest);
    console.log("result", result);
    return res.json(acceptedRequest);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
