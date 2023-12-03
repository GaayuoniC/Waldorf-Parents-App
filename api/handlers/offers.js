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
  const user = await clerkClient.users.getUser(req.body.userId);
  const primaryEmailAddress = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId
  );
  const offer = {
    userId: req.body.userId,
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
};
export const createRequest = async (req, res) => {
  const user = await clerkClient.users.getUser(req.body.userId);
  const primaryEmailAddress = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId
  );
  const request = {
    userId: req.body.userId,
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
};

export const acceptRequest = async (req, res) => {
  const offer = await knex("offers").where({ id: req.params.id }).first();
  const user = await clerkClient.users.getUser(req.body.userId);
  const primaryEmailAddress = user.emailAddresses.find(
    (emailAddress) => emailAddress.id === user.primaryEmailAddressId
  );
  const acceptedOffer = {
    acceptedByUserId: req.body.userId,
    acceptedByEmail: primaryEmailAddress.emailAddress,
    acceptedByChildName: req.body.childName,
  };
  await knex("offers").where({ id: req.params.id }).update(acceptedOffer);
  return res.json(acceptedOffer);
};
