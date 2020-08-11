export function createCalculationTemplate() {
    return `
        <div class="calculator-content">
            <div class="calculator-content-title">
                <h1>Рассчитать автокредит</h1>
            </div>
            <div class="calculator-content-body">
                <div class="calculator-content-body-left">
                    <div class="calculator-content-body-left-inputs">
                        <div class="input-wrapper">
                            <button id="open-configure" class="open-configure" data-type="openModalBtn">
                                <div class="text">Выбрать модификацию авто</div>
                            </button>
                        </div>
                        <div class="input-wrapper">
                            <div class="title">Первоначальный взнос</div>
                            <div class="input">
                                <input type="number" id="an-initial-fee" value="0" class="input-text">
                            </div>
                            <div class="input">
                                <input type="range" min="100000" max="10000000" id="an-initial-fee-range" value="0" class="input-range">
                            </div>
                        </div>
                        <div class="input-wrapper">
                            <div class="title">Срок кредита</div>
                            <div class="input">
                                <input type="number" id="credit-term" value="0" class="input-text">
                            </div>
                            <div class="input">
                                <input type="range" min="1" max="20" id="credit-term-range" value="0" class="input-range">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="calculator-content-body-right">
                    <div class="final-results-wrapper">
                        <div class="final-result-item">
                            <div class="title">Сумма кредита</div>
                            <div class="value"><span id="amount-of-credit">0</span> ₽</div>
                        </div>
                        <div class="final-result-item">
                            <div class="title">Ежемесячный платеж</div>
                            <div class="value"><span id="monthly-payment">0</span> ₽</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        `
}
