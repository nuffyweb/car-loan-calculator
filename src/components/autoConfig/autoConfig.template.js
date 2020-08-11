import carBlue from '@/images/car-blue.png';
import carBrown from '@/images/car-brown.png';
import carOrange from '@/images/car-orange.png';
import carPink from '@/images/car-pink.png';
import carRed from '@/images/car-red.png';
import { config } from '@core/const';
//import COLORS from '@/core/const';

import { capitalize } from '@core/utils'

const colors = [
    {
        value: 'blue',
        ru_value: 'Голубой',
        image: `${carBlue}`,
        active: true
    },
    {
        value: 'brown',
        ru_value: 'Коричневый',
        image: `${carBrown}`,
        active: false
    },
    {
        value: 'orange',
        ru_value: 'Оранжевый',
        image: `${carOrange}`,
        active: false
    },
    {
        value: 'pink',
        ru_value: 'Розовый',
        image: `${carPink}`,
        active: false
    },
    {
        value: 'red',
        ru_value: 'Красный',
        image: `${carRed}`,
        active: false
    },
]
const createConfigColorTemplate = (color) => {
    return `
    <div
        class="dot ${color.value} ${color.active ? 'active' : ''}"
        data-color="${color.value}"
        data-type="dot"
    >
            <span class="content">${color.ru_value}</span>
    </div>
    `
}

const createConfigImageTemplate = (color) => {
    const capitalizeColor = capitalize(color.value)
    const colorSrc = `car${capitalizeColor}`.toString()
    return `
    <img
        class="car ${color.active ? 'active' : ''}"
        src= "${color.image}"
        data-color="${color.value}"
    >
    `
}
const createConfigColorsTemplate = (colors) => {
    return colors
        .map((color) => createConfigColorTemplate(color))
        .join(`\n`);
};
const createConfigImagesTemplate = (colors) => {
    return colors
        .map((color) => createConfigImageTemplate(color))
        .join(`\n`);
};
const createConfigEngineOptionsTemplate = (options) => {
    return options
        .map((option) => {

            let value = option.value
            let content = option.content
            return (
                `<option name="${value}" value="${value}"> ${content} </option>`
            );
        })
        .join(`\n`);

}
const createConfigComplectationOptionsTemplate = (options) => {
    return options
        .map((option) => {

            let value = option.value
            let content = option.content
            return (
                `<option name="${value}" value="${value}"> ${content} </option>`
            );
        })
        .join(`\n`);

}
export function createConfigTemplate() {
    const engineOptionsTemplate = createConfigEngineOptionsTemplate(config.engine);
    const complectationOptionsTemplate = createConfigComplectationOptionsTemplate(config.complectation);
    const colorsTemplate = createConfigColorsTemplate(colors)
    const imagesTemplate = createConfigImagesTemplate(colors)
    return `
      <div id="overlay"  data-type="overlay"></div>
      <div id="modal-window">
          <h2>Выберете конфигурацию вашего автомобиля:</h2>
          <p>Цвет:</p>
          <div class="color-config-wrapper">
              <div class="color-config-wrapper-left">
              ${imagesTemplate}
              </div>
              <div class="color-config-wrapper-right color-dots">
              ${colorsTemplate}
              </div>
          </div>
          <p>Двигатель:</p>
          <select name="engine" id="engine">
              ${engineOptionsTemplate}
          </select>
          <p>Комплектация:</p>
          <select name="complectation" id="complectation">
          ${complectationOptionsTemplate}
          </select>
          <p class="">Стоимость машины без допов: <span id="priceOfAuto"></span> ₽</p>
          <p class="">Дополнительная сумма: <span id="additionalAmount"></span> ₽</p>
          <div class="buttons-wrapper">
              <button id="saveConfiguration" data-type="save">СОХРАНИТЬ</button>
              <button id="cancelConfiguration" data-type="close">ОТМЕНИТЬ</button>
          </div>
      </div>
      `
}
