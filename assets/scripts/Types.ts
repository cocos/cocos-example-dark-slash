
import { ccenum } from 'cc';

export enum BossType {
    Demon = 0,
    SkeletonKing
};
ccenum(BossType);

export enum FoeType {
    Foe0 = 0,
    Foe1,
    Foe2,
    Foe3,
    Foe5,
    Foe6,
    Boss1,
    Boss2
};
ccenum(FoeType);

export enum ProjectileType {
    Arrow = 0,
    Fireball,
    None = 999
};
ccenum(ProjectileType);
