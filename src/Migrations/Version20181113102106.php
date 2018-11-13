<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20181113102106 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE products (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE products_attributes (products_id INT NOT NULL, attributes_id INT NOT NULL, INDEX IDX_E3C4666E6C8A81A9 (products_id), INDEX IDX_E3C4666EBAAF4009 (attributes_id), PRIMARY KEY(products_id, attributes_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE attributes (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE product_attribute_pivot (attribute_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_4D1C9FDFB6E62EFA (attribute_id), INDEX IDX_4D1C9FDF4584665A (product_id), PRIMARY KEY(attribute_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE products_attributes ADD CONSTRAINT FK_E3C4666E6C8A81A9 FOREIGN KEY (products_id) REFERENCES products (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE products_attributes ADD CONSTRAINT FK_E3C4666EBAAF4009 FOREIGN KEY (attributes_id) REFERENCES attributes (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE product_attribute_pivot ADD CONSTRAINT FK_4D1C9FDFB6E62EFA FOREIGN KEY (attribute_id) REFERENCES attributes (id)');
        $this->addSql('ALTER TABLE product_attribute_pivot ADD CONSTRAINT FK_4D1C9FDF4584665A FOREIGN KEY (product_id) REFERENCES products (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE products_attributes DROP FOREIGN KEY FK_E3C4666E6C8A81A9');
        $this->addSql('ALTER TABLE product_attribute_pivot DROP FOREIGN KEY FK_4D1C9FDF4584665A');
        $this->addSql('ALTER TABLE products_attributes DROP FOREIGN KEY FK_E3C4666EBAAF4009');
        $this->addSql('ALTER TABLE product_attribute_pivot DROP FOREIGN KEY FK_4D1C9FDFB6E62EFA');
        $this->addSql('DROP TABLE products');
        $this->addSql('DROP TABLE products_attributes');
        $this->addSql('DROP TABLE attributes');
        $this->addSql('DROP TABLE product_attribute_pivot');
    }
}
