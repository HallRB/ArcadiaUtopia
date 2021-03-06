import React, {Component} from 'react';
import "../../pages/combat/cards/cards.css";
import {Howl, Howler} from "howler";
import ArrowFire from "../sounds/arrow.wav";

const Music = [{sound: ArrowFire}]

class Bow extends Component {

    state = {
        myHP: 100,
        enemyHP: 300,
    }

    Sound = (src) => {
        let myHP = this.state.myHP;
        let enemyHP = this.state.enemyHP;

        const sound = new Howl({
            src
        })
        sound.play();
        if (myHP <= 0) {
            document.getElementById("announcements").innerHTML = "You Lose!";
            return;
        } else if (enemyHP <= 0) {
            document.getElementById("announcements").innerHTML = "You Win!"
        } else {
            var precision = 5;
            var bowdamage = Math.floor((Math.random() * 8)) + precision;
            console.log("you did " + bowdamage + " damage");
        }
        enemyHP -= bowdamage;
        var bossbowdamage = Math.floor((Math.random() * 6) + 1);
        myHP -= bossbowdamage;

        this.setState({
            myHP: myHP,
            enemyHP: enemyHP,
        })

        console.log("the enemy took " + bowdamage + " bow damage")
        console.log("you received " + bossbowdamage + " bow damage")
        console.log(myHP);
        console.log(enemyHP);
    }

    abilityandsound = () => {
        return Music.map((soundObj, index) => {
            return (
                <button key={index} id="bow" onClick={() => this.Sound(soundObj.sound)}>
                </button>
            )
        })
    }

    render() {
        Howler.volume(4.0)
        return <div className="sound">
            {this.abilityandsound()}
        </div>
    }


    Soundsword = (src) => {
        let myHP = this.state.myHP;
        let enemyHP = this.state.enemyHP;

        const soundsword = new Howl({
            src
        })
        soundsword.play();
        if (myHP <= 0) {
            document.getElementById("announcements").innerHTML = "You Lose!";
        } else if (enemyHP <= 0) {
            document.getElementById("announcements").innerHTML = "You Win!"
        } else {
            var strength = 5;
            var damage = Math.floor((Math.random() * 12)) + strength;
            console.log("you did " + damage + " sword damage");
        }
        enemyHP -= damage;
        var bossdamage = Math.floor((Math.random() * 10) + 1);
        myHP -= bossdamage;

        this.setState({
            myHP: myHP,
            enemyHP: enemyHP,
        })

        console.log("the enemy took " + damage + " sword damage")
        console.log("you received " + bossdamage + " sword damage")
        console.log(myHP);
        console.log(enemyHP);


    }

    abilityandsoundsword = () => {
        return Music.map((soundObj, index) => {
            return (
                <button key={index} id="sword" onClick={() => this.Soundsword(soundObj.sound)}>
                </button>
            )
        })
    }

    rendersword() {
        Howler.volume(1.0)
        return <div className="sound">
            {this.abilityandsoundsword()}
        </div>
    }
}

export default Bow