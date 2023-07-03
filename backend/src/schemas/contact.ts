import { Schema, model, Types } from 'mongoose';

export interface IContact {
  _id?: string | Types.ObjectId,
  name: string;
  phones: string[];
  mail?: string;
  __v: string;
}

const contactSchema = new Schema<IContact>({
  name: { type: String, required: true, unique: true },
  phones: [{ type: String, required: true }],
  mail: { type: String }
}, { collection: 'contacts' });

const Contact = model<IContact>('Contact', contactSchema);

export default Contact;
