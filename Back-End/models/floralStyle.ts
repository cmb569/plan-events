import mongoose, { Document } from 'mongoose';
import Florals, { IFlorals } from './florals';

// INTERFACE
export interface IFloralStyle extends Document {
  name: string;
  florals?: IFlorals[];
}

// SCHEMA
const floralStyleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      enum: ['Bouquet', 'CenterPiece', 'Arch'],
    },
  },
  { toJSON: { virtuals: true } }
);

// Hooks
floralStyleSchema.post<IFloralStyle>('findOneAndDelete', function(this: Query<IFloralStyleDocument, IFloralStyleDocument>, doc) {
  Florals.deleteMany({ floralStyle: doc?._id }).then(
    (deleteStatus) => {
      console.log(deleteStatus);
    }
  );
});


// Virtuals:
floralStyleSchema.virtual('florals', {
  ref: 'Florals',
  localField: '_id',
  foreignField: 'floralStyle',
});

// MODEL & EXPORT
const FloralStyle = mongoose.model<IFloralStyle>(
  'FloralStyle',
  floralStyleSchema
);
export default FloralStyle;
