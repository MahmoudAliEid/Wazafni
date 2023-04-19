const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const sequelize = require("./Connection");
const {DataTypes} = require("sequelize");

const Applications = sequelize.define(
  "applications",
  {
    applicationId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: "applied",
      allowNull: false,
      validate: {
        validateStatus: (value) => {
          const enums = [
            "applied", // when a applicant is applied
            "shortlisted", // when a applicant is shortlisted
            "accepted", // when a applicant is accepted
            "rejected", // when a applicant is rejected
            "deleted", // when any job is deleted
            "cancelled", // an application is cancelled by its author or when other application is accepted
            "finished",
          ];
          if (!enums.includes(value)) {
            throw new Error("Not a valid status type!");
          }
        },
      },
    },
    dateOfApplication: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    dateOfJoining: {
      type: DataTypes.DATE,
      // validate:{
      //     validator : (value)=>{}
      // }
    },
    sop: {
      type: DataTypes.STRING,
      validate: {
        validator: (value) => {
          if (value.split(" ").filter((ele) => ele != "").length > 250) {
            throw new Error(
              "Statement of purpose should not be greater than 250 words"
            );
          }
        },
      },
    },
    jid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      references: {
        model: "jobs",
        key: "jid",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Applications;
