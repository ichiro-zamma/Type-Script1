// ・親クラス（ベース）: Character
// 子クラス（Character を継承して作るもの

// ・Warrior（勇者クラス）
// Character を継承。

// ・ Mage（魔法使いクラス）
// Character を継承。

// ---------------------------------------------------
// 必須: Character クラスを完成させる
// ---------------------------------------------------
class Character {
  name: string;
  _hp: number;
  attackPower: number;
 
  // コンストラクタ（ここはお手本として埋めてあります）
  constructor(name: string, hp: number, attackPower: number) {
    this.name = name;
    this._hp = hp;
    this.attackPower = attackPower;
  }
 
  // 相手を攻撃するメソッド
  attack(target: Character): void {
    // TODO: target の hp を this.attackPower の分だけ減らす
    // 相手の「受付（hp）」を通して減らすことで、マイナス防止（セッター）が働く！
    target.hp -=this.attackPower;
    // TODO: 攻撃の結果を console.log で表示する
    //       例) 「勇者 の攻撃！ スライム に 20 ダメージ（残りHP: 30）」
    console.log(`${this.name} の攻撃！ ${target.name} に ${this.attackPower} ダメージ（残りHP: ${target.hp}）`);
  }

  // ゲッター（HPを見るための窓口）
  get hp(): number {
    return this._hp;
  }
 
  // セッター（HPを書き換えるための窓口・ここでマイナスを防ぐ！）
  set hp(value: number) {
    if (value < 0) {
      this._hp = 0; // 0未満になりそうなら、強制的に0にする
    } else {
      this._hp = value; // それ以外なら、そのままの数値をセットする
    }
}
}
 
 
// ---------------------------------------------------
// 動作確認（必須ライン）
// ---------------------------------------------------
// TODO: 2体つくって attack を呼んでみましょう
//
 // 勇者（名前: 勇者, HP: 100, 攻撃力: 20）
const hero = new Character('勇者', 100, 20);

// スライム（名前: スライム, HP: 30, 攻撃力: 5）
const slime = new Character('スライム', 30, 5);

hero.attack(slime);
slime.attack(hero);
 
// ---------------------------------------------------
// コア: Warrior を継承でつくる
// ---------------------------------------------------
// TODO: Character を継承した Warrior クラスをつくる（extends）
class Warrior extends Character{
//TODO: attack をオーバーライドして、Character とは違う攻撃にする
//       例) ダメージを2倍にする、専用のログを出す など
    attack(target: Character): void {
        const damage = this.attackPower * 2;
        target._hp -= damage;
        console.log(`${this.name} の渾身の一撃！ ${target.name} に ${damage} 大ダメージ（残りHP: ${target.hp}）`);
  
    }
}


const warrior = new Warrior('ロト', 120, 15);
const bossSlime = new Character('キングスライム', 50, 10);

warrior.attack(bossSlime);

  
// ---------------------------------------------------
// 発展（できた人向け）
// ---------------------------------------------------
// TODO: HP が 0 未満にならないように、ゲッター / セッターで管理する
// TODO: 別の職業（Mage など）を追加する
// ---------------------------------------------------
// 別の職業（Mage など）を追加する
// ---------------------------------------------------
class Mage extends Character {
  attack(target: Character): void {
    //Math.random() 「0から0.99999... までのランダムな小数」を出す機能
    // 0〜1のランダムな数字を出し、0.5より大きければダメージ1.5倍！
    let damage = this.attackPower;
    if (Math.random() >0.5 ) {
      damage = Math.floor(damage * 1.5); // 2倍にして、小数点を切り捨てる 小数点以下を切り捨てて、整数の数字にする
      console.log(`まほうの威力がアップした！`);
    }

    target.hp -= damage;
    console.log(` ${this.name} は魔法を唱えた！ ${target.name} に ${damage} のダメージ!（残りHP: ${target.hp}）`);
  }
}

const mage = new Mage('魔法使い', 70, 30);
const dragon = new Character('ドラゴン', 150, 15);

// 魔法使いがドラゴンに攻撃
mage.attack(dragon);

// TODO: Character[] に複数体を入れて、forEach などでまとめて攻撃させる
// 攻撃される側の敵
const boss = new Character('大魔王よし', 500, 20);

//  キャラクターの配列（パーティ）を作る
// 型を「Character[]」にすることで、子クラスである Warrior や Mage も一緒に入れらる
const party: Character[] = [
  new Warrior('キム', 120, 15),
  new Mage('コマ', 70, 30),
  new Character('taka', 80, 10)
];

// forEach でまとめて攻撃！
console.log('--- ターン開始！一斉攻撃！ ---');

party.forEach((member) => {
  // 配列に入っているキャラクターが、順番に1体ずつ「member」に入って実行されます
  member.attack(boss);
});

console.log('--- ターンの終了 ---');
// TODO: どちらかの hp が 0 以下になったらバトル終了、という流れをつくる

// ---------------------------------------------------
// どちらかの hp が 0 以下になったらバトル終了
// ---------------------------------------------------

//  戦う2人を用意する
const hero1 = new Warrior('勇者みや', 100, 30);
const boss1 = new Character('魔王にし', 120, 25);

console.log('===  バトル開始！ ===');

//  どちらかのHPが0より大きい間、ずっと戦い続ける（whileループ）
while (hero1.hp > 0 && boss1.hp > 0) {
  
  // 勇者の攻撃！
  hero1.attack(boss1);
  
  // もし魔王のHPが0になったら？
  if (boss1.hp === 0) { // セッターで0未満は0になるよう設定済みなので、=== 0 で大丈夫
    console.log(` ${boss1.name} をやっつけた！ ${hero1.name} の勝利！`);
    break; // ここで戦い（whileループ）を強制終了して抜け出す！
  }

  // 魔王が生き残っていれば、反撃
  boss1.attack(hero1);

  // もし勇者のHPが0になったら？
  if (hero1.hp === 0) {
    console.log(` ${hero1.name} は力尽きた..`);
    break; // ここで戦いを強制終了！
  }
  
  console.log('--- 次のターン ---');
}

console.log('===  バトル終了 ===');

