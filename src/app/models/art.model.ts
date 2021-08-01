import { ArtMeterial } from "./art-material-model";

export class Art {
    public name: String;
    public description: String;
    public imagePath: String;
    public artMaterials: ArtMeterial[];

    constructor(name: String, description: String, imagePath: String, artMaterials: ArtMeterial[]) {
       this.name = name;
       this.description = description;
       this.imagePath = imagePath;  
       this.artMaterials = artMaterials;      
    }
}