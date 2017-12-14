const translations = {
    fr: {
        villager: {
            title: 'villageois',
            pluralTitle: 'villageois',
        },
        villagerVillager: {
            title: 'double villageois',
            pluralTitle: 'double villageois',
        },
        littleGirl: {
            title: 'petite fille',
            pluralTitle: 'petites filles'
        },
        cupid: {
            title: 'Cupidon',
            pluralTitle: 'Cupidons'
        },
        seer: {
            title: 'voyante',
            pluralTitle: 'voyantes'
        },
        hunter: {
            title: 'chasseur',
            pluralTitle: 'chasseurs'
        },
        sister: {
            title: 'soeur',
            pluralTitle: 'soeurs'
        },
        brother: {
            title: 'frère',
            pluralTitle: 'frères'
        },
        bearLeader: {
            title: 'montreur d\'ours',
            pluralTitle: 'montreurs d\'ours'
        },
        idiot: {
            title: 'idiot',
            pluralTitle: 'idiots'
        },
        scapegoat: {
            title: 'bouc émissaire',
            pluralTitle: 'boucs émissaires'
        },
        ancient: {
            title: 'ancien',
            pluralTitle: 'anciens'
        },
        judge: {
            title: 'juge bègue',
            pluralTitle: 'juges bègues'
        },
        knight: {
            title: 'chevalier',
            pluralTitle: 'chevaliers'
        },
        servant: {
            title: 'domestique',
            pluralTitle: 'domestiques'
        },
        actor: {
            title: 'comédien',
            pluralTitle: 'comédiens'
        },
        fox: {
            title: 'renard',
            pluralTitle: 'renards'
        },
        savior: {
            title: 'salvateur',
            pluralTitle: 'salvateurs'
        },
        witch: {
            title: 'sorcière',
            pluralTitle: 'sorcières'
        },
        werewolf: {
            title: 'loup-garou',
            pluralTitle: 'loup-garous'
        },
        whiteWerewolf: {
            title: 'loup-garou blanc',
            pluralTitle: 'loup-garous blancs'
        },
        dogWold: {
            title: 'chien-loup',
            pluralTitle: 'chien-loups'
        },
        wildChild: {
            title: 'enfant sauvage',
            pluralTitle: 'enfants sauvages'
        },
        bigMeanWolf: {
            title: 'grand méchant Loup',
            pluralTitle: 'grands méchants Loups'
        },
        vileFatherWolves: {
            title: 'enfant sauvage',
            pluralTitle: 'enfants sauvages'
        },
        angel: {
            title: 'ange',
            pluralTitle: 'anges'
        },
        piedPiper: {
            title: 'joueur de flûte',
            pluralTitle: 'joueurs de flûte'
        },
        sectarian: {
            title: 'abominable sectaire',
            pluralTitle: 'abominables sectaires'
        },
    }
};

const townFolks = [
    'villager',
    'villagerVillager',
    'littleGirl',
    'cupid',
    'hunter',
    'sister',
    'brother',
    'bearLeader',
    'idiot',
    'scapegoat',
    'ancient',
    'judge',
    'knight',
    'servant'
];

const powerUsers = [
    'seer',
    'actor',
    'fox',
    'savior',
    'witch',
];

const werewolves = [
    'werewolf',
    'whiteWerewolf',
    'dogWolf',
    'wildChild',
    'bigMeanWolf',
    'vileFatherWolves'
];

const enemies = [
    'angel',
    'piedPiper',
    'sectarian'
];

const characters = {townFolks, powerUsers, werewolves, enemies};

export default {all: characters, townFolks, powerUsers, werewolves, enemies, translations};