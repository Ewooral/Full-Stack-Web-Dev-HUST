import { ReactElement, ReactNode } from "react";

// CONVENTIONAL PROPS
function Heading({ title }: {title: string}){
    return <h1>{title}</h1>
}

const defaultContainerProps = {
    heading: <strong>My Heading</strong>
};

type ContainerPops = { children: ReactNode } & typeof defaultContainerProps;

function Container({
    heading,
    children,

}: ContainerPops): ReactElement {
    return (
        <div>
            <h1>{heading}</h1>
            {children}
        </div>
    )
}

Container.defaultProps = defaultContainerProps;


// RENDER
function DefaultProps(){
    return(
        <div>
            <Heading title="Hello, Everyone!"></Heading>
        </div>
    )
}