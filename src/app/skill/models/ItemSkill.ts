import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import {SkillType} from "./SkillType";

export class ItemSkill {
  readonly name: string;
  readonly icon: IconDefinition;
  readonly color: string;
  readonly type: SkillType;

  constructor(
    name: string,
    icon: IconDefinition,
    color: string,
    type :SkillType
    ) {
    this.name = name;
    this.icon = icon;
    this.color = color;
    this.type=type;
  }

  isProgramming= () => this.type == SkillType.LANGUAGE

  isTech= () => this.type == SkillType.TECH
}
