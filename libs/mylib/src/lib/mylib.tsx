import styles from './mylib.module.less';

/* eslint-disable-next-line */
export interface MylibProps {}

export function Mylib(props: MylibProps) {
  console.log("Nx lib imported using as Github package");
}

export default Mylib;
