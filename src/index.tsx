import jsx from './factory/jsx.factory';
import Element2 from './el2';

function Element1({ prop1 }: { prop1: string }) {
  return (
    <div
      onclick={() => {
        console.log('hihi');
      }}
    >
      {prop1}
    </div>
  );
}

const el = <Element1 prop1="Click me"></Element1>;

// var div: HTMLElement
const div = (
  <div id="foo">
    <Element2 prop1={'test'} />
    {el}
  </div>
);

document.body.appendChild(div);
