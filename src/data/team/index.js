import { narendran } from './narendran';
import { harisudhan } from './harisudhan';
import { anvin } from './anvin';
import { rathi } from './rathi';
import { anuradha } from './anuradha';
import { brighty } from './brighty';
import { alagusundari } from './alagusundari';
import { arunmozhi } from './arunmozhi';

export const teamMembers = {
  founders: [narendran],
  coFounders: [rathi, anuradha, brighty, alagusundari],
  teamMembers: [harisudhan, anvin, arunmozhi]
};

export const getAllTeamMembers = () => {
  return [...teamMembers.founders, ...teamMembers.coFounders, ...teamMembers.teamMembers];
};

export const getTeamMemberById = (id) => {
  const allMembers = getAllTeamMembers();
  return allMembers.find(member => member.id === id);
}; 