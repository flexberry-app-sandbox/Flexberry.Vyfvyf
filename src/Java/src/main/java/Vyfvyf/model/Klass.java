package Vyfvyf.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Vyfvyf.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Класс
 */
@Entity(name = "IISVyfvyfКласс")
@Table(schema = "public", name = "Класс")
public class Klass {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Ладно")
    private Integer ладно;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dom")
    @Convert("Dom")
    @Column(name = "Дом", length = 16, unique = true, nullable = false)
    private UUID _domid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dom", insertable = false, updatable = false)
    private Dom dom;


    public Klass() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getЛадно() {
      return ладно;
    }

    public void setЛадно(Integer ладно) {
      this.ладно = ладно;
    }


}