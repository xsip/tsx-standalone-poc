export default function jsx(
  tag: JSX.Tag | JSX.Component,
  attributes: { [key: string]: any } | null,
  ...children: Node[]
) {
  if (typeof tag === 'function') {
    return tag(attributes ?? {}, children);
  }
  type Tag = typeof tag;

  const element: HTMLElementTagNameMap[Tag] = document.createElement(tag);

  // Assign attributes:
  const map = attributes ?? {};
  Object.entries(attributes || {}).forEach(([name, value]) => {
    if (name.startsWith('on')) {
      element.addEventListener(name.toLowerCase().substr(2), value);
      return;
    }
    element.setAttribute(name, value.toString())
  })


  // append children
  for (const child of children) {
    if (typeof child === 'string') {
      element.innerText += child;
      continue;
    }
    if (Array.isArray(child)) {
      element.append(...child);
      continue;
    }
    element.appendChild(child);
  }
  return element;
}
