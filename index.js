function Student(_name, _roll_no, _class, _section, _markes) {
    this.name = _name;
    this.roll_no = _roll_no;
    this.class = _class;
    this.section = _section;
    this.markes = _markes
    this.printTop3Subjects = function () {
        let result = Object.keys(this.markes);
        result.sort((a, b) => this.markes[b] - this.markes[a]);
        console.log(result.slice(0, 3));
    }

    this.printReportCard = function () {
        console.log("+--------------------+")
        console.log("|     REPORT CARD    |")
        console.log("+--------------------+")
        console.log(`| Name    - ${this.name}  |`)
        console.log(`| Roll no. - ${this.roll_no}      |`)
        console.log(`| Class - ${this.class}          |`)
        console.log(`| Section - ${this.section}        |`)
        for(let key in this.markes){
            console.log(`| ${key} - ${this.markes[key]} |`)
        }
        console.log("+--------------------+")
    }
}



const Aniket = new Student("anikiet", 43, 5, 'A', {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
})

Aniket.printTop3Subjects();
Aniket.printReportCard();