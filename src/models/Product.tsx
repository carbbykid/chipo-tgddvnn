import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    imgUrl: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number },
    shortDesc: { type: String, required: true },
    description: { type: String, required: true },
    reviews: [
      {
        rating: Number,
        text: { type: String },
      },
    ],
    avgRating: { type: Number },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
