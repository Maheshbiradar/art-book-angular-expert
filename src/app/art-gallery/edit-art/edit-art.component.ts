import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Art } from 'src/app/models/art.model';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-edit-art',
  templateUrl: './edit-art.component.html',
  styleUrls: ['./edit-art.component.css']
})
export class EditArtComponent implements OnInit {
  id: number;
  editMode = false;
  editForm: FormGroup;  
  

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router, private artService: ArtService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => { 
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initializeForm();
    })
  }

  onSubmit() {
    if(this.editMode) {
      this.artService.updateArt(this.id, this.editForm.value)
    } else {
      this.artService.addArt(this.editForm.value)
    }
    this.onCancel();
  }

  initializeForm() {
    let  name: String;
    let  description: String;
    let imgPath: String;
    let materialsGroup: FormArray =  new FormArray([]);

    if(this.editMode) {       
      const art: Art = this.artService.getArtFromId(this.id);
      name = art.name;
      imgPath = art.imagePath;
      description = art.description;
      if(art['artMaterials']) {
        for(let material of art.artMaterials) {
          materialsGroup.push(
            new FormGroup({
              'name': new FormControl(material.name, Validators.required),
              'amount': new FormControl(material.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          )
        }
       }
      }
      this.editForm = new FormGroup({
        'name': new FormControl(name, Validators.required),
        'imagePath': new FormControl(imgPath, Validators.required),
        'description': new FormControl(description, Validators.required),
        'artMaterials': materialsGroup
      })    
   
  }

  onAddMaterial() {
    (<FormArray>(this.editForm.get("artMaterials"))).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }

  get controls() { 
    return (<FormArray>this.editForm.get('artMaterials')).controls;
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  onDeleteMaterial(index: number) {
    (<FormArray>(this.editForm.get("artMaterials"))).removeAt(index);
  }

}
