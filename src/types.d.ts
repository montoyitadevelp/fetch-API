export interface InfoCampaing {
  missionNumber: number;
  name: string;
  description: string;
  imageUrl: string;
  type: Type;
  id: string;
  contentId: string;
}

export enum Type {
  BlueTeam = "BlueTeam",
  OsirisTeam = "OsirisTeam",
}
