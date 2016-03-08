const BossType = cc.Enum({
    Demon: -1,
    SkeletonKing: -1
});

const FoeType = cc.Enum({
    Foe0: -1,
    Foe1: -1,
    Foe2: -1,
    Foe3: -1,
    Foe5: -1,
    Foe6: -1,
    Boss1: -1,
    Boss2: -1
});

const ProjectileType = cc.Enum({
    Arrow: -1,
    Fireball: -1,
    None: 999
});

module.exports = {
    BossType,
    FoeType,
    ProjectileType
};