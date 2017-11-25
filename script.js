function animal(sound_animal, number_of_paws, is_wild) {
  this.sound_animal = sound_animal,
  this.number_of_paws = number_of_paws,
  this.is_wild = is_wild,

  this.saySound = function() {
    for (var i = 0; i < 3; i++) {
      alert(this.sound_animal);
    }
  }
}

var animal = new animal("gav", 4, true);

animal.saySound();
