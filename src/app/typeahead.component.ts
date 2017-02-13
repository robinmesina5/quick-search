import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// const employees = [{'name': 'Adam Makowiecki','email': 'amakowiecki@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179826'},
// {'name': 'Adheip Mally','email': 'amally@guidepoint.com','title': 'Research Project Manager','location': 'New York','phone': '(212) 784-9692'},
// {'name': 'Agnes Lee','email': 'agnes.lee@guidepoint.com','title': 'Senior Relationship Manager','location': 'Singapore','phone': '(656) 595-6781','extension': ' Extension:781','mobile': '(659) 384-6170'},
// {'name': 'Akaash Patel','email': 'apatel@guidepoint.com','title': 'Team Lead','location': 'London','phone': '442075294007','mobile': '447798893176'},
// {'name': 'Alan Fookes','email': 'afookes@guidepoint.com','title': 'Research Analyst ','location': 'London','phone': '442037147241','extension': ' Extension:7241'},
// {'name': 'Alba Lloreta Pane','email': 'alloreta@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179823','extension': ' Extension:DUS only: 823'},
// {'name': 'Albert Sebag','email': 'asebag@guidepoint.com','title': 'Chief Executive Officer','location': 'New York','phone': '12127590242','extension': ' Extension:9290'},
// {'name': 'Alberto Villar','email': 'avillar@guidepoint.com','title': 'Research Project Manager','location': 'Dusseldorf','phone': '4921178179824','extension': ' Extension:824','mobile': '4915114536972'},
// {'name': 'Alessandra Bellantoni','email': 'abellantoni@guidepoint.com','title': 'Analyst &amp; Team Lead','location': 'New York','phone': '16468733013','extension': ' Extension:9953'},
// {'name': 'Alexander Milinski','email': 'amilinski@guidepoint.com','title': 'Research Analyst','location': 'Dusseldorf','phone': '4921178179840'},
// {'name': 'Alexandra O’Brian','email': 'aobrian@guidepoint.com','title': 'Administrative Assistant','location': 'New York','phone': '(646) 395-9324'},
// {'name': 'Ali Bonafide','email': 'abonafide@guidepoint.com','title': 'Research Analyst','location': 'New York'}];
const employees = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component ({
  selector: 'ngbd-typeahead-search',
  templateUrl: './typeahead.component.html',
  styles: [`.form-control { width: 300px; }`]
})

export class NgbdTypeaheadSearch {
  public model: any;

  search = (text$: Observable<string>) =>
  text$
    .debounceTime(200)
    .distinctUntilChanged()
    .map(term => term.length < 2 ? []
      : employees.filter(v => new RegExp(term, 'gi').test(v)).splice(0, 10));
}
