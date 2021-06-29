import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { fade } from 'src/app/animations';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    animations: [
        // fade
        trigger('slide', [
            transition('void <=> *', [
                // style({ opacity: 0, transform: 'translateX(-20px)' }),
                // animate(1000)

                query('tr', style({ opacity : 0, transform: 'translateX(-20px)'}), { optional: true }),
                query('tr', stagger(300, [animate(500, style({opacity: 1, transform: 'translateX(0px)'}))]),{ optional: true })
            ])
        ])
    ]
})
export class EmployeesComponent implements OnInit {

    employees: any;
    employee = new Employee();

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.getEmployeesData();
    }

    getEmployeesData() {
        this.dataService.getData().subscribe(res => {
            this.employees = res;
        });
    }

    insertData() {
        this.dataService.insertData(this.employee).subscribe(res => {
            this.getEmployeesData();
        });
    }

    deleteData(id) {
        // console.log(id)
        this.dataService.deleteData(id).subscribe(res => {
            this.getEmployeesData();
        });
    }
}
