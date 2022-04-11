using System.ComponentModel.DataAnnotations;

namespace Todos.Api.Models {
    class Todo {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }
        public bool IsCompleted { get; set; }
        public DateTime? DueDate { get; set; }
    }
}