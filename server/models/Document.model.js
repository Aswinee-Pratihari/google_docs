import mongoose from "mongoose";

const DocumentSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },

  name: {
    type: String,
    default: "Untitled Document",
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    //  required: true,
  },
});

const Document = mongoose.model("Document", DocumentSchema);

export default Document;
