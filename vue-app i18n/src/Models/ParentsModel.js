
export class ParentsModel {
  constructor (props) {
    this.attrs = props;
  }

  get father () { return this.attrs.father; }
  get mother () { return this.attrs.mother; }
};
