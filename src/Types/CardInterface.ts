export default interface CardInterface {
  title: string;
  backendUrl: string;
  tooltipText?: string;
  requestBodyType?: string;
  value?: number | string ;
  iconClassName ?: string;
  backGroundColorClassName ?: string;
  textColorClassName ?: string;
  iconBackGroundColorClassName ?: string;
}
