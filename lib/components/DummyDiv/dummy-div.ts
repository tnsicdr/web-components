import { html } from 'lit';

export type DummyDivProps = {
  name?: string;
};

export const DummyDiv = ({ name }: DummyDivProps) => {
  return html` <div>Hello world${name ? ', ' + name : null}</div> `;
};
