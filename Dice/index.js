export const Dice = (props) => {
  const { side } = props;

  const element = document.createElement('div');
  element.innerHTML = `
<div class="dice">
  <div class='dice__side--${side}'></div>
  <button class="btn btn--small roll-btn">hodit</button>
</div>
`;

  const roll = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  element.querySelector('button').addEventListener('click', () => {
    element.replaceWith(Dice({
      side: roll()
    }))
  })
  return element;
};

