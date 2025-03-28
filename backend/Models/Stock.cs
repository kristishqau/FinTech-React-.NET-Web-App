using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("Stocks")]
    public class Stock
    {
        public int Id { get; set; }
        public string? Symbol { get; set; }
        public string? CompanyName { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal Purchase { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal LastDividend { get; set; }
        public string? Industry { get; set; }
        public long MarketCap { get; set; }
        public List<Comment> Comments { get; set; } = [];
    }
}