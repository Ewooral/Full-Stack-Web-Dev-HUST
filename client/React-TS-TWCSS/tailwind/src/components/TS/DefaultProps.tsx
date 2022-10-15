import { Component, ReactElement, ReactNode, useState } from 'react';

// CONVENTIONAL PROPS
const Heading = ({ title }: { title: string }): ReactElement | null => {
  return <h1>{title}</h1>;
};

const HeadingWithContent = ({ children }: { children: ReactNode }): ReactElement | null => {
  return <div>{children}</div>;
};

// DEFAULT PROPS
const defaultContainerProps = {
  heading: <strong>My Heading</strong>
};

// Merge two types together to create a composite type
type ContainerPops = { children: ReactNode } & typeof defaultContainerProps;

const Container = ({ heading, children }: ContainerPops): ReactElement => {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

Container.defaultProps = defaultContainerProps;

// FUNCTIONAL PROPS
const TextWithNumber = ({
  header,
  children
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}) => {
  const [state, setState] = useState<number>(1);
  return (
    <div>
      {header && <h1>{header?.(state)}</h1>}
      <div>{children(state)}</div>
      <div>
        <button
          className="bg-red-500 text-white p-3 rounded-2xl "
          onClick={() => setState(state + 1)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

// GENERICS
// LIST

function List<ListItem>({
  items,
  render
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) {
  return (
    <ul className="p-2 mt-3 ">
      {items.map((item, id) => (
        <li key={id}>{render(item)}</li>
      ))}
    </ul>
  );
}

// CLASS COMPONENT
class MyHeader extends Component<
  {
    title: ReactNode;
  },
  { fish: 2 }
> {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}

// RENDER
const DefaultProps = () => {
  return (
    <div
      className="container mx-auto 

                            space-y-12 md:space-y-0 md:flex-row"
    >
      <Heading title="Hello, Everyone!"></Heading>
      <HeadingWithContent>
        <strong>Hi!</strong>
      </HeadingWithContent>
      <Container>Foo</Container>
      <TextWithNumber header={(num: number) => <span>Header {num}</span>}>
        {(num: number) => <div>Today's number is {num} </div>}
      </TextWithNumber>
      <List
        items={['Jack', 'Sadie', 'Oso']}
        render={(item: string) => <div>{item.toLowerCase()}</div>}
      ></List>
      <MyHeader title="There ya go!" />
    </div>
  );
};

export default DefaultProps;
