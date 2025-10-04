import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Товари",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Назва",
      type: "string",
    }),
    defineField({
      name: "price",
      title: "Ціна",
      type: "number",
    }),
    defineField({
      name: "oldPrice",
      title: "Стара ціна",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Фото",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
