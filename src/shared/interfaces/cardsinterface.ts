export interface CardProps {
    title: string | number;
    body: string;
    underBody?: string | number;
    link: string;
    className?: string;
    buttonText?: string;
}