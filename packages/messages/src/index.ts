import Handlebars from "handlebars";

export function formatMessage(name: string): string {
  const template = Handlebars.compile("Name: {{name}}");
  return template({ name });
}
