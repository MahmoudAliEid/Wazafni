const {DataTypes} = require("sequelize");
const Sequelize = require("sequelize");
const sequelize = require("./Connection");
const JobApplicant = sequelize.define(
  "Jobapplicant",
  {
    aid: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("skills");
        if (typeof value === "string") {
          return value.split(";");
        }
        return value;
      },
      set(Val) {
        this.setDataValue("skills", Val.join(";"));
      },
    },
    resume: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    education: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const value = this.getDataValue("education");
        if (typeof value === "string") {
          return value.split(";");
        }
        return value;
      },
      set(Val) {
        this.setDataValue("education", Val.join(";"));
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      default: -1,
      min: -1,
      max: 5,
    },
  },
  {
    timestamps: false,
  }
);
// JobApplicant.sync().then(() => console.log("Table Job Applicant Created"));
module.exports = JobApplicant;
