import React from 'react'
import "./characterSelect.css";
import "../../../public/utils/gameManager";

export default function characterSelect() {
    return (
        <div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('fighter')">
                    <img src="assets/fighter" alt="fighter" />
                    <div>
                        <h2>Fighter</h2>
                        <p>A master of martial combat, skilled with a variety of weapons and armor.</p>
                        <h3>Starting Health: <span>10 HP</span> </h3>
                        <h3>Primary Stats: <span>Strength and Constitution</span></h3>
                        <h3>Resource: <span>Rage</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('ranger')">
                    <img src="assets/ranger" alt="ranger" />
                    <div>
                        <h2>Ranger</h2>
                        <p>A warrior who combats threats on the edge of civilization.</p>
                        <h3>Starting Health: <p>10 HP</p> </h3>
                        <h3>Primary Stats: <p>Dexterity and Wisdom</p></h3>
                        <h3>Resource: <span>Stamina</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('cleric')">
                    <img src="assets/cleric" alt="cleric" />
                    <div>
                        <h2>Cleric</h2>
                        <p>A priestly champion who wields divine magic in service of a higher power.</p>
                        <h3>Starting Health: <span>8 HP</span> </h3>
                        <h3>Primary Stats: <span>Strength and Wisdom</span></h3>
                        <h3>Resource: <span>Mana</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('rogue')">
                    <img src="assets/rough" alt="rogue" />
                    <div>
                        <h2>Rogue</h2>
                        <p>A scoundral that uses stealth and trickery to overcome obstacles and enemies.</p>
                        <h3>Starting Health: <span>8 HP</span> </h3>
                        <h3>Primary Stats: <span>Dexterity and Intelligence</span></h3>
                        <h3>Resource: <span>Stamina</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('paladin')">
                    <img src="assets/paladin" alt="paladin" />
                    <div>
                        <h2>Paladin</h2>
                        <p>A holy warrior bound to a sacred oath.</p>
                        <h3>Starting Health: <span>10 HP</span> </h3>
                        <h3>Primary Stats: <span>Wisdom and Charisma</span></h3>
                        <h3>Resource: <span>Mana</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('monk')">
                    <img src="assets/monk" alt="monk" />
                    <div>
                        <h2>Monk</h2>
                        <p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.</p>
                        <h3>Starting Health: <span>8 HP</span> </h3>
                        <h3>Primary Stats: <span>Strength and Dexterity</span></h3>
                        <h3>Resource: <span>Mana</span></h3>
                    </div>
                </a>
            </div>
            <div className="characterClass">
                <a href="#" onclick="GameManager.setGameStart('sorcerer')">
                    <img src="assets/sorcerer" alt="sorcerer" />
                    <div>
                        <h2>Sorcerer</h2>
                        <p>A speelcaster whp draws on inherent magic from a gift or bloodline.</p>
                        <h3>Starting Health: <span>6 HP</span> </h3>
                        <h3>Primary Stats: <span>Constitution and Charisma</span></h3>
                        <h3>Resource: <span>Mana</span></h3>
                    </div>
                </a>
            </div>
        </div>
    )
}
