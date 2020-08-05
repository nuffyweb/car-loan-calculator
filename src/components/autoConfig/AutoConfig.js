import { CalculatorComponent } from '@core/CalculatorComponent'
import carBlue from '@/images/car-blue.png';
import carBrown from '@/images/car-brown.png';
import carOrange from '@/images/car-orange.png';
import carPink from '@/images/car-pink.png';
import carRed from '@/images/car-red.png';
export class AutoConfig extends CalculatorComponent {
    static className = 'wrapper-modal'

    constructor($root) {
        super($root, {
            name: 'AutoConfig',
            listeners: ['input', 'click']
        })
    }

    toHTML() {
        return `
      <div id="overlay"></div>
      <div id="modal-window">
          <h2>Выберете конфигурацию вашего автомобиля:</h2>
          <p>Цвет:</p>
          <div class="color-config-wrapper">
              <div class="color-config-wrapper-left">
                  <img class="car active" src=${carBlue} alt="" data-color="blue">
                  <img class="car" src=${carBrown} alt="" data-color="brown">
                  <img class="car" src=${carOrange} alt="" data-color="orange">
                  <img class="car" src=${carPink} alt="" data-color="pink">
                  <img class="car" src=${carRed} alt="" data-color="red">
              </div>
              <div class="color-config-wrapper-right color-dots">
                  <div class="dot blue active"  data-color="blue">
                      <span class="content">Голубой</span>
                  </div>
                  <div class="dot brown" data-color="brown">
                      <span class="content">Коричневый</span>
                  </div>
                  <div class="dot orange" data-color="orange">
                      <span class="content">Оранжевый</span>
                  </div>
                  <div class="dot pink" data-color="pink">
                      <span class="content">Розовый</span>
                  </div>
                  <div class="dot red" data-color="red">
                      <span class="content">Красный</span>
                  </div>
              </div>
          </div>
          <p>Двигатель:</p>
          <select name="engine" id="engine">
              <option value="0">1.6</option>
              <option value="20000">2.0</option>
              <option value="40000">2.4</option>
          </select>
          <p>Комплектация:</p>
          <select name="complectation" id="complectation">
              <option value="0">Базовая</option>
              <option value="15000">Средняя</option>
              <option value="30000">Расширенная</option>
          </select>
          <p class="">Стоимость машины без допов: <span id="priceOfAuto"></span> ₽</p>
          <p class="">Дополнительная сумма: <span id="additionalAmount"></span> ₽</p>
          <div class="buttons-wrapper">
              <button id="saveConfiguration">СОХРАНИТЬ</button>
              <button id="cancelConfiguration">ОТМЕНИТЬ</button>
          </div>
      </div>
      `
    }

    onInput(event) {
        console.log(this.$root)
        console.log('AutoConfig: onInput', event.target.value.trim())
    }

    onClick() {
        console.log('mk')
    }
}
