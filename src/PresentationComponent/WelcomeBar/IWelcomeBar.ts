export default interface IWelcomeBar {
    userName: string;
    welcomeMessage: string | null;
    placeholderText?: string;
    icons?: Array<{
        iconClass: string;
        onClick: () => void;
    }>
}