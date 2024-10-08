export const IconMap = ( props: React.SVGProps<SVGSVGElement> ) => {
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            { ...props }
        >
            <path
                fillRule="evenodd"
                d="M15.817.113A.5.5 0 0116 .5v14a.5.5 0 01-.402.49l-5 1a.502.502 0 01-.196 0L5.5 15.01l-4.902.98A.5.5 0 010 15.5v-14a.5.5 0 01.402-.49l5-1a.5.5 0 01.196 0L10.5.99l4.902-.98a.5.5 0 01.415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98l4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
            />
        </svg>
    );
}