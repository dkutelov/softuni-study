from project.hero import Hero
from project.elf import Elf
from project.muse_elf import MuseElf
from project.wizard import Wizard
from project.dark_wizard import DarkWizard
from project.soul_master import SoulMaster
from project.knight import Knight
from project.dark_knight import DarkKnight
from project.blade_knight import BladeKnight

h = Hero('hero', 1)
e = Elf('Elf', 2)
me = MuseElf('Muse', 3)
w = Wizard('Wizard', 100)
dw = DarkWizard('Dark Wizard', 101)
sm = SoulMaster('SM', 111)
nk = Knight('Knight',11)
dkn = DarkKnight('Dark', 12)
blkn = BladeKnight('Blade', 123)

print(h)
print(e)
print(me)
print(w)
print(dw)
print(sm)
print(nk)
print(dkn)
print(blkn)