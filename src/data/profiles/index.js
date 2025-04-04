import { anvinProfile } from './anvin';
import { defaultProfile } from './default';
import { harisudhanProfile } from './harisudhan';
import { arunmozhiProfile } from './arunmozhi';
import { anuradhaProfile } from './anuradha';
import { rathiProfile } from './rathi';
import { alagausundariProfile } from './alagausundari';
import { narendranProfile } from './narendran';
import { brightyProfile } from './brighty';

export const getProfileData = (id) => {
  switch (id) {
    case 'anvin':
      return anvinProfile;
    case 'harisudhan':
      return harisudhanProfile;
    case 'arunmozhi':
      return arunmozhiProfile;
    case 'anuradha':
      return anuradhaProfile;
    case 'rathi':
      return rathiProfile;
    case 'alagausundari':
      return alagausundariProfile;
    case 'narendran':
      return narendranProfile;
    case 'brighty':
      return brightyProfile;
    default:
      return defaultProfile;
  }
}; 