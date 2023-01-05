<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230105104532 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE future_user ADD id_user_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE future_user ADD CONSTRAINT FK_BF23A0C279F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_BF23A0C279F37AE5 ON future_user (id_user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE future_user DROP FOREIGN KEY FK_BF23A0C279F37AE5');
        $this->addSql('DROP INDEX UNIQ_BF23A0C279F37AE5 ON future_user');
        $this->addSql('ALTER TABLE future_user DROP id_user_id');
    }
}
