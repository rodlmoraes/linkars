import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CreateKarComponent } from './modal/create-kar/create-kar.component';
import { KarsService, Kar } from './kars.service';

@Component({
  selector: 'app-kars',
  templateUrl: './kars.component.html',
  styleUrls: ['./kars.component.css']
})
export class KarsComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) private paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) private sort: MatSort;
  dataSource: MatTableDataSource<Kar>;
  displayedColumns = ['vehicle', 'brand', 'year', 'action'];

  constructor(private router: Router, public dialog: MatDialog, private karsService: KarsService) { }

  ngOnInit() {
    this.getPageData();
  }

  getPageData() {
    this.karsService.getKars().subscribe((kars: [Kar]) => {
      this.dataSource = new MatTableDataSource(kars);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  newKar(): void {
    const modalRef = this.dialog.open(CreateKarComponent, { data: {} });
    modalRef.afterClosed().subscribe(() => this.getPageData());
  }

  details(kar: Kar): void {
    this.router.navigate(['kars', kar._id]);
  }

  update(kar: Kar): void {
    const modalRef = this.dialog.open(CreateKarComponent, {
      data: {
        _id: kar._id,
        vehicle: kar.vehicle,
        brand: kar.brand,
        year: kar.year,
        description: kar.description,
      },
    });
    modalRef.afterClosed().subscribe(() => this.getPageData());
  }

  delete(kar: Kar): void {
    this.karsService.deleteKar(kar._id).subscribe(() => {
      this.getPageData();
    });
  }
}
