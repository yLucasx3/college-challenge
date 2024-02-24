import { IStudentPropsWithEnrollment } from "@/domain/repositories/student.repository";
import { IPaginatedResponse } from "@/domain/shared/paginated-types";

export class ListStudentResponseDTO {
  items: any[];
  pageInfos: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };

  map(
    paginatedResponse: IPaginatedResponse<IStudentPropsWithEnrollment>
  ): ListStudentResponseDTO {
    this.items = paginatedResponse.items?.map(
      (item: IStudentPropsWithEnrollment) => {
        return {
          id: item.id,
          fullName: item.fullName.getValue(),
          email: item.email.getValue(),
          cpf: item.document.getValue(),
          ra: item.academicRecord,
          enrollment: {
            id: item.enrollment.id,
            class: {
              id: item.enrollment.class.id,
              name: item.enrollment.class.name,
              course: {
                id: item.enrollment.class.course.id,
                description: item.enrollment.class.course.description,
              },
            },
          },
        };
      }
    )!;

    this.pageInfos = {
      totalItems: paginatedResponse.pageInfos.totalPages,
      totalPages: paginatedResponse.pageInfos.totalPages,
      currentPage: paginatedResponse.pageInfos.currentPage,
    };

    return this;
  }
}
