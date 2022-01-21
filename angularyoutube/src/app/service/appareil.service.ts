export class appareilService {
  appareils = [
    {
      name: 'machine à laver',
      status: 'éteint',
      num: 0,
    },
    {
      name: 'television',
      status: 'allumé',
      num: 1,
    },
    {
      name: 'radio',
      status: 'éteint',
      num: 2,
    },
  ];

  SwitchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
  }

  SwitchOnDown() {
    for (let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
  }

  SwitchOnOne(index: number) {
    this.appareils[index].status = 'allumé';
  }

  SwitchDownOne(index: number) {
    this.appareils[index].status = 'éteint';
  }
}
