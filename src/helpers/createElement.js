export const createElement = ({tag, classList, textContent, parentElement,data}) => {
    const element = document.createElement(tag);

    if (classList?.length) {
        element.classList.add(...classList);
    }
    if (textContent) {
        element.textContent = textContent;
    }
    if (parentElement) {
        parentElement.append(element);
    }

    if (data) {
         element.dataset.item = data;
    }


    return element;
}