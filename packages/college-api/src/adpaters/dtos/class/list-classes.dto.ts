import { Class } from "@/domain/entities/class.entity";
import { IPaginatedResponse } from "@/domain/shared/paginated-types";

export class ListClassResponseDTO {
  items: any[];
  pageInfos: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
  };

  map(paginatedResponse: IPaginatedResponse<Class>): ListClassResponseDTO {
    this.items = paginatedResponse.items?.map((item) => {
      return {
        id: item.id,
        name: item.name,
        course: {
          name: item.course?.name,
          description: item.course?.name,
        },
      };
    })!;

    this.pageInfos = {
      totalItems: paginatedResponse.pageInfos.totalPages,
      totalPages: paginatedResponse.pageInfos.totalPages,
      currentPage: paginatedResponse.pageInfos.currentPage,
    };

    return this;
  }
}
