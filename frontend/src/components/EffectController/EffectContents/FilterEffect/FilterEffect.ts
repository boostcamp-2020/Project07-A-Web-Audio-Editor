import "./FilterEffect.scss";
import { EventType, EventKeyType } from '@types';
import { EventUtil } from '@util';
import { Controller } from "@controllers";

(() => {
  const FilterEffect = class extends HTMLElement {
    private typeValue: HTMLDivElement | null;
    private frequencyValue: HTMLDivElement | null;
    private QValue: HTMLDivElement | null;
    private typeCurrentValue: string;
    private frequencyCurrentValue: string;
    private QCurrentValue: string;
    private typeValueChecker: string[];

    constructor() {
      super();
      this.typeValue = null;
      this.frequencyValue = null;
      this.QValue = null;

      this.typeCurrentValue = 'lowpass';
      this.frequencyCurrentValue = '350';
      this.QCurrentValue = '1';
      this.typeValueChecker = ['checked', '','', ''];
    }

    connectedCallback() {
      this.render();
      this.initElement();
      this.initEvent();
    }

    initEvent(): void {
      EventUtil.registerEventToRoot({
        eventTypes: [EventType.change],
        eventKey: EventKeyType.EFFECT_FILTER_TYPE,
        listeners: [this.typeListener],
        bindObj: this
      });

      EventUtil.registerEventToRoot({
        eventTypes: [EventType.input],
        eventKey: EventKeyType.EFFECT_FILTER_INPUT_FREQUENCY,
        listeners: [this.inputFrequencyListener],
        bindObj: this
      });

      EventUtil.registerEventToRoot({
        eventTypes: [EventType.input],
        eventKey: EventKeyType.EFFECT_FILTER_INPUT_Q,
        listeners: [this.inputQListener],
        bindObj: this
      });
    }

    typeListener = (e) => {
      const { target } = e;

      if (!this.typeValue) return;
      this.typeValue.innerText = `${target.value}`;
    }

    inputFrequencyListener = (e) => {
      const { target } = e;

      if (!this.frequencyValue) return;
      this.frequencyValue.innerText = `${target.value}`;
    }

    inputQListener = (e) => {
        const { target } = e;
  
        if (!this.QValue) return;
        this.QValue.innerText = `${target.value}`;
    }

    initElement(): void {
      this.typeValue = document.querySelector('.type-value');
      this.frequencyValue = document.querySelector('.frequency-value');
      this.QValue = document.querySelector('.Q-value');
    }

    setDefaultProperties() {
      if(Controller.getIsEffectModifyMode()) {
        const effectIds = Controller.getModifyingEffectInfo();
        const effect = Controller.getEffect(effectIds.id, effectIds.trackId, effectIds.trackSectionId);

        this.typeCurrentValue = effect.properties.getType();
        this.frequencyCurrentValue = String(effect.properties.getProperty('frequency'));
        this.QCurrentValue = String(effect.properties.getProperty('Q'));
      }
      else {
        this.typeCurrentValue = 'lowpass';
        this.frequencyCurrentValue = '350';
        this.QCurrentValue = '1';
      }
    }

    checkTypeValue() {
      switch(this.typeCurrentValue) {
        case 'lowpass':
          this.typeValueChecker = ['checked', '', '', ''];
          break;
        case 'highpass':
          this.typeValueChecker = ['', 'checked', '', ''];
          break;
        case 'lowshelf':
          this.typeValueChecker = ['', '', 'checked', ''];
          break;
        case 'highshelf':
          this.typeValueChecker = ['', '', '', 'checked'];
          break;
      }
    }

    render() {
      this.setDefaultProperties();
      this.checkTypeValue();

      this.innerHTML = `
          <div class="effect-input">
            <div class="effect-option-name">Type Value</div>
            <div class="effect-input-type-radio-wrap">
              <input type="radio" name="filter-type" value="lowpass" ${this.typeValueChecker[0]} event-key=${EventKeyType.EFFECT_FILTER_TYPE}>lowpass</input> 
            </div>
            <div class="effect-input-type-radio-wrap">
              <input type="radio" name="filter-type" value="highpass" ${this.typeValueChecker[1]} event-key=${EventKeyType.EFFECT_FILTER_TYPE}>highpass</input> 
            </div>
            <div class="effect-input-type-radio-wrap">
              <input type="radio" name="filter-type" value="lowshelf" ${this.typeValueChecker[2]} event-key=${EventKeyType.EFFECT_FILTER_TYPE}>lowshelf</input> 
            </div>
            <div class="effect-input-type-radio-wrap">
              <input type="radio" name="filter-type" value="highshelf" ${this.typeValueChecker[3]} event-key=${EventKeyType.EFFECT_FILTER_TYPE}>highshelf</input> 
            </div>

            <div class="effect-option-name">Frequency Value</div>
            <div class="property-percentage-input">
              <input class="property-percentage-input" type="range" value="${this.frequencyCurrentValue}" min="0" max="24000" step="100" event-key=${EventKeyType.EFFECT_FILTER_INPUT_FREQUENCY}>
              <div class="property-percentage-value frequency-value">${this.frequencyCurrentValue}</div>
            </div>

            <div class="effect-option-name">Q Value</div>
            <div class="property-percentage-input">
              <input class="property-percentage-input" type="range" value="${this.QCurrentValue}" min="0.1" max="1000" step="0.1" event-key=${EventKeyType.EFFECT_FILTER_INPUT_Q}>
              <div class="property-percentage-value Q-value">${this.QCurrentValue}</div>
            </div>
          </div>
      `;
    }
  };
  customElements.define('audi-effect-filter', FilterEffect);
})();

export { };
