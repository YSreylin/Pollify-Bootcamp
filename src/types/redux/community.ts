// Define state action
// interface FileMetadata {
//   name: string;
//   size: number;
//   type: string;
// }

export interface User {
  id: number;
  username: string;
  email: string;
}

interface CommunitySate {
  userProfile: File | null;
  communityName: string;
  searchTerm: string;
  communityDescription: string;
  isCreateCommunityOpen: boolean;
  userData: User[];
  invitedUsers: User[];
}

const UpdateCreateCommunityAction = "Create Community";

export default CommunitySate;
export { UpdateCreateCommunityAction };
